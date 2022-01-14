import styled from "styled-components"

export const DetailContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f2f5f6;
`
export const DetailContent = styled.div`
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (max-width: 1300px){
        align-items: center;
    }
`
export const LeftDetail = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`
export const RightDetailContentDsc = styled.div`

`
export const RightDetailContentLocation = styled.div`
    color: grey;
    max-width: 200px;
    margin-bottom: 5px;
    margin-top: 5px;
`
export const RightDetailContentMap = styled.div`
    display: flex;
`
export const RightDetailContentImg = styled.img`

`
export const RightDetailContentsImg = styled.img`
    width: 15px;
    height: 15px;
    background-size: cover;
`
export const RightDetailContentText = styled.div`
    color: var(--dark-blue-color);
`
export const LeftDetailWrapper = styled.div`
    background-color: var(--white-color);
    text-align: left;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
export const LeftDetailImg = styled.img`
    background-size: cover;

    @media screen and (max-width: 650px){
        display: none;
    }
`
export const LeftDetailContent = styled.div`

`
export const LeftDetailTitle = styled.h3`
    margin: 25px;
`
export const LeftDetailDsc = styled.h4`
    margin: 25px;
`
export const LeftDetailParagraph = styled.p`
    max-width: 600px;
    margin: 25px;
    color: grey;
`
export const RightDetail = styled.div`
    
`
export const RightDetailContentRating = styled.div`
    display: flex;
`
export const RightDetailContentTitle = styled.h4`
    margin-bottom: 5px;
`
export const RightDetailWrapper = styled.div`
    background-color: var(--white-color);
    text-align: left;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
export const RightDetailTitle = styled.h3`
    margin-bottom: 20px;
    margin-top: 20px;
    margin: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const RightDetailBottomWrapper = styled.div`
    margin: 25px;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
`
export const RightDetailImg = styled.img`
    width: 80px;
    height: 80px;
    background-size: cover;
`
export const RightDetailContent = styled.div`

`
export const ListWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    text-align: left;
    font-size: 13px;
    margin: 35px 35px;
    color: grey;
`
export const ListContent = styled.li`
    margin-bottom: 6px;
`
export const RightDetailBottomPrice = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`
export const RightDetailBottomDiscount = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
`
export const DiscountPrice = styled.p`
    padding: 3px;
    color: var(--danger-color);
    background-color: #dc354644;
    border-radius: 3px;
    font-size: 13px;
    margin-bottom: 10px;
`
export const Discount = styled.div`
    text-decoration: line-through;
    margin-bottom: 10px;
    color: grey;
    font-size: 18px;
`
export const FixedPrice = styled.h2`
    color: var(--dark-blue-color);
    margin-bottom: 1rem;
`
export const ContentButton = styled.button`
    padding: 1rem 3rem;
    cursor: pointer;
    font-size: 17px;
    border: none;
    border-radius: 10px;
    font-weight: 500;
    background-color: var(--orange-color);
    color: var(--white-color);
    margin-bottom: 2rem;
`