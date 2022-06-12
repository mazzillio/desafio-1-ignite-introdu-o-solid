import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userAdm: User = this.usersRepository.findById(user_id);
    if (!userAdm) {
      throw new Error("User does not exists");
    }
    if (!userAdm.admin) {
      throw new Error("This user does not admin");
    }
    const allUsers: User[] = this.usersRepository.list();
    return allUsers;
  }
}

export { ListAllUsersUseCase };
