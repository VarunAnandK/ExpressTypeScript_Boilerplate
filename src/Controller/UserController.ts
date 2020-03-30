import { Request, Response } from "express";
import { getManager, getConnection } from "typeorm";
import * as uniqueKey from 'unique-key';
import { pusher } from "../Helper/PusherEvent";
import { LoadAndGetPDF } from "../Helper/Report";
import { user } from "../Database/Table/user";


export async function List(request: Request, response: Response) {
    const User = await user.find();
    response.send(User);
}

export async function ById(request: Request, response: Response) {
    const User = await user.findOne(request.params.id);
    response.send(User);
}

export async function Insert(request: Request, response: Response) {
    try {
        const User = await user.insert(request.body);
        response.send({ Type: "S", Message: "Insert Sucessfully", Id: User.identifiers });
    }
    catch (e) {
        response.send({ Type: "E", Message: e });
    }
}

export async function Update(request: Request, response: Response) {
    try {
        const User = await user.update(request.body.id, request.body);
        response.send({ Type: "S", Message: "Updated Sucessfully" });
    }
    catch (e) {
        response.send({ Type: "E", Message: e });
    }
}

export async function Delete(request: Request, response: Response) {
    try {
        const User = await user.delete(request.params.id);
        response.send({ Type: "S", Message: "Deleted Sucessfully" });
    }
    catch (e) {
        response.send({ Type: "E", Message: e });
    }
}

export async function Login(request: Request, response: Response) {
    try {
        const User = await user.findOne({ where: { user_name: request.body.user_name }, relations: ["user_role"] });
        if (User) {
            if (User.password == request.body.password) {
                if (request.body.id > 0) {
                    pusher.trigger("UserSession_" + User.id, "CropSecEvent", { event: "logout" });
                    var api_token = uniqueKey(60);
                    await getConnection().createQueryBuilder()
                        .update(user)
                        .set({ api_token: api_token })
                        .where("id =" + User.id)
                        .execute();
                    User.api_token = api_token;
                    response.send({ Type: "S", Message: "Login successfully", "AdditionalData": { 'User': User } });
                }
                else {
                    if (User.api_token == null || User.api_token == "") {
                        var api_token = uniqueKey(60);
                        await getConnection().createQueryBuilder()
                            .update(user)
                            .set({ api_token: api_token })
                            .where("id =" + User.id)
                            .execute();
                        User.api_token = api_token;
                        response.send({ Type: "S", Message: "Login successfully", "AdditionalData": { 'User': User } });
                    }
                    else {
                        response.send({ Type: "UE", Message: "User is already logged in other system", Id: User.id });
                    }
                }
            }
            else {
                response.send({ Type: "E", Message: "Password Incorrect" });
            }
        }
    }
    catch (e) {
        response.send({ Type: "E", Message: e.message });
    }
}
export async function Logout(request: Request, response: Response) {
    try {
        await getConnection().createQueryBuilder()
            .update(user)
            .set({ api_token: "" })
            .where("id =" + request.params.id)
            .execute();
        response.send({ Type: "S", Message: "Logged Out" });
    }
    catch (e) {
        response.send({ Type: "E", Message: e.message });
    }
} 
