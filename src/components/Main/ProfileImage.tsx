import styled from "@emotion/styled";
import {FunctionComponent} from "react";

const PROFILE_IMAGE_LINK =
    'https://avatars.githubusercontent.com/u/55608425?s=400&u=d5467f0a9ce9b04bbb25d6e4776c9f6e56fd6afa&v=4'

const ProfileImageWrapper = styled.img`
  width: 120px;    
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;
`

const ProfileImage: FunctionComponent = function () {
    return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />
}

export default ProfileImage