import styled from "styled-components";


/* 브라우저 크기에 따라 가로 크기 변경 */
const ResponsiveBlock = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
    width: 1024px;
    margin: 0 auto;

    @media (max-width: 1024px) {
        width: 768px;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;


const Responsive = ({ children, ...rest }) => {
    // style, className, onClick, onMouseMove등의 props를 사용할수 있도록
    // ...rest를 사용하여 ResponsiveBlock에게 전달

    return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>

}


export default Responsive;





