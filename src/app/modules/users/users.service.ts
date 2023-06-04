import config from '../../../config'
import ApiError from '../../../errors/ApiError'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generateUserId } from './users.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremental Id
  const id = await generateUserId()
  user.id = id

  // default password
  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  // create user
  const createUser = await User.create(user)
  if (!createUser) {
    throw new ApiError(400, 'Failed to create user')
  }
  return createUser
}

export default { createUser }
