import styled from 'styled-components'

const Title = styled.h1`
    font-weight: bold;
    font-size: 20px;
    color: ${props => props.$primary ? 'blue' : 'red'};
`

const Home = () => {
    return (
        <div style={{ width: '20%', margin: '50px auto', textAlign: 'center' }}>
            <Title>Day la ninhtito</Title>
        </div>
    )
}

export default Home