import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
      const userUpdate = this.usersRepository.findById(user_id)

      if(!userUpdate){
        throw Error ('Usuário não existe')
      }

      this.usersRepository.turnAdmin(userUpdate)

      return userUpdate
  }
}

export { TurnUserAdminUseCase };
