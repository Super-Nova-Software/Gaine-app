import { gql } from '@apollo/client';

export const CHANGE_ROLE = gql`
mutation ChangeRole($memberId: UUID!, $newRoleId: Int!) {
  changeRole(memberId:$memberId, newRoleId: $newRoleId ) {
    member{
      id
      user{
        username
      }
    }
  }
}
`;
 export const KICK_MEMBER = gql`
 mutation KickMember($memberId: UUID!) {
  kickMember(memberId: $memberId) {
    success
  }
}
 `;