import { Request, Response } from "express";
import { user_role } from "../Database/Table/user_role";

export async function List(request: Request, response: Response) {
    const UserRoleData = await user_role.find();
    response.send(UserRoleData);
}

export async function ById(request: Request, response: Response) {
    const UserRoleData = await user_role.findOne(request.params.id);
    response.send(UserRoleData);
}

export async function Insert(request: Request, response: Response) {
    try {
        const UserRoleData = await user_role.insert(request.body);
        response.send({ Type: "S", Message: "Insert Sucessfully", Id: UserRoleData.identifiers });
    }
    catch (e) {
        response.send({ Type: "E", Message: e });
    }
}

export async function Update(request: Request, response: Response) {
    try {
        await user_role.update(request.body.id, request.body);
        response.send({ Type: "S", Message: "Updated Sucessfully" });
    }
    catch (e) {
        response.send({ Type: "E", Message: e });
    }
}

export async function Delete(request: Request, response: Response) {
    try {
        await user_role.delete(request.params.id);
        response.send({ Type: "S", Message: "Deleted Sucessfully" });
    }
    catch (e) {
        response.send({ Type: "E", Message: e });
    }
}