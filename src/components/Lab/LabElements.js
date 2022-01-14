import styled from "styled-components"

export const LabContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f2f5f6;
`
export const LabTitle = styled.h3`
    text-align: left;
    align-items: flex-start;
    justify-content: flex-start;
    display: flex;
    margin-top: 2rem;
`
export const LabWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 4rem;
    margin: 50px;
    flex-wrap: wrap;

    @media screen and (max-width: 1300px){
        align-items: center;
    }
`
export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const LabLeft = styled.div`
    margin-top: 1rem;
`
export const LeftWrapper = styled.div`
    background-color: var(--white-color);
    padding: 2rem 7rem;
    text-align: left;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
export const LeftTitle = styled.h4`
    margin-bottom: 20px;
    margin-left: -50px;
`
export const TextLine = styled.hr`
    height: 1px;
    border-width: 0;
    background-color: gray;
`
export const LeftCheck = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    margin-left: -50px;
`
export const LeftInput = styled.input`
    height: 25px;
    width: 25px;
    margin-right: 10px;
    margin-bottom: 5px;
`
export const LeftLabel = styled.label`
    text-align: left;
    color: grey;
`
export const LabRight = styled.div`
    border-radius: 10px;
    height: 100%;
    margin: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: var(--white-color);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
export const LeftContent = styled.div`
    
`
export const WrapperLeft = styled.div`
    
`
export const WrapperImg = styled.img`
    align-items: center;
    background-size: cover;
`
export const CenterWrapper = styled.div`

`
export const CenterTop = styled.div`
    display: flex;
    margin: 25px 15px;
`
export const CenterTopLeft = styled.p`
    display:flex;
    padding: 5px;
    border-radius: 15px;
    font-size: 13px;
    align-items: center;
    justify-content: center;
    background-color: var(--green-color);
    color: var(--white-color);
    margin-right: 5px;
`
export const CenterTopRight = styled.div`
    display:flex;
    padding: 5px;
    border-radius: 15px;
    font-size: 13px;
    align-items: center;
    justify-content: center;
    background-color: var(--dark-blue-color);
    color: var(--white-color);
    margin-right: 5px;
`
export const CenterContent = styled.div`
    text-align: left;
    margin: 15px;
`
export const CenterContentTitle = styled.h3`
    margin-bottom: 10px;
`
export const CenterContentDsc = styled.p`
    color: gray;
`
export const CenterBottom = styled.div`
    display:flex;
    margin: 15px;
    justify-content: space-around;
    color: gray;
`
export const BottomRatingImg = styled.img`
    margin-right: 10px;
`
export const BottomRating = styled.div`
    margin-right: 20px;
`
export const CenterBottomList = styled.ul`
    display: flex;
    text-align: left;
    font-size: 13px;
    align-items: center;
    justify-content: center;
`
export const CenterBottomContent = styled.li`
    margin-right: 25px;
`
export const VerticalLine = styled.div`
        border-left: 1px solid gray;
        height: 100%;
`
export const RightWrapper = styled.div`
    display: flex;
    margin: 45px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
`
export const RightWrapperDiscount = styled.div`
    padding: 3px;
    color: var(--danger-color);
    background-color: #dc354644;
    border-radius: 3px;
    font-size: 13px;
    margin-bottom: 10px;
`
export const RightWrapperPrice = styled.div`
    text-decoration: line-through;
    margin-bottom: 10px;
    color: grey;
    font-size: 18px;
`
export const RightWrapperPriceFix = styled.div`
    font-size: 25px;
    color: var(--orange-color);
    font-weight: 600;
`