import React, {FunctionComponent} from "react";
import {graphql} from "gatsby";
import {css, Global} from "@emotion/react";

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    font-size: 20px;
  }
`

const textStyle = css`
  font-size: 18px;
  font-weight: 700;
  color: gray;
`

type InfoPageProps = {
    data: {
        site: {
            siteMetadata: {
                title: string
                description: string
                author: string
            }
        }
    }
}

const InfoPage: FunctionComponent<InfoPageProps> = function ({data}) {
    const siteMetadata = data.site.siteMetadata;

    return (
        <div>
            <Global styles={globalStyle} />
            <div css={textStyle}>{siteMetadata.title}</div>
            {siteMetadata.description}
            {siteMetadata.author}
        </div>
    )
}

export default InfoPage;

// graphQL을 export로 설정하면 build 돌 때? 자동으로 쿼리를 요청해준다.
export const metadataQuery = graphql`
    {
        site {
            siteMetadata {
                title,
                description,
                author
            }
        }
    }
`