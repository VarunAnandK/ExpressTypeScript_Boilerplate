import { Request, Response } from "express";
import { getManager } from "typeorm";
import { User } from "../Database/Table/User";


export async function List(request: Request, response: Response) {
    const UserRepository = getManager().getRepository(User);
    const user = await UserRepository.find();
    response.send(user);
}

export async function Insert(request: Request, response: Response) {
    try {
        const UserRepository = getManager().getRepository(User);
        const user = await UserRepository.insert(request.body);
        response.send({ Type: "S", Message: "Insert Sucessfully", Id: user.identifiers });
    }
    catch (e) {
        response.send({ Type: "E", Message: e });
    }

}

export async function Update(request: Request, response: Response) {
    try {
        const UserRepository = getManager().getRepository(User);
        const user = await UserRepository.update(request.body.id, request.body);
        response.send({ Type: "S", Message: "Updated Sucessfully" });
    }
    catch (e) {
        response.send({ Type: "E", Message: e });
    }
}

export async function Delete(request: Request, response: Response) {
    try {
        const UserRepository = getManager().getRepository(User);
        const user = await UserRepository.delete(request.params.id);
        response.send({ Type: "S", Message: "Deleted Sucessfully" });
    }
    catch (e) {
        response.send({ Type: "E", Message: e });
    }
}
