import { Request, Response } from "express";
import { getManager } from "typeorm";
import { user } from "../Database/Table/user";


export async function List(request: Request, response: Response) {
    const UserRepository = getManager().getRepository(user);
    const User = await UserRepository.find();
    response.send(User);
}

export async function ById(request: Request, response: Response) {
    const UserRepository = getManager().getRepository(user);
    const User = await UserRepository.findOne(request.body.id);
    response.send(User);
}

export async function Insert(request: Request, response: Response) {
    try {
        const UserRepository = getManager().getRepository(user);
        const User = await UserRepository.insert(request.body);
        response.send({ Type: "S", Message: "Insert Sucessfully", Id: User.identifiers });
    }
    catch (e) {
        response.send({ Type: "E", Message: e });
    }

}

export async function Update(request: Request, response: Response) {
    try {
        const UserRepository = getManager().getRepository(user);
        const User = await UserRepository.update(request.body.id, request.body);
        response.send({ Type: "S", Message: "Updated Sucessfully" });
    }
    catch (e) {
        response.send({ Type: "E", Message: e });
    }
}

export async function Delete(request: Request, response: Response) {
    try {
        const UserRepository = getManager().getRepository(user);
        const User = await UserRepository.delete(request.params.id);
        response.send({ Type: "S", Message: "Deleted Sucessfully" });
    }
    catch (e) {
        response.send({ Type: "E", Message: e });
    }
}
