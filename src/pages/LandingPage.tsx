import styled from 'styled-components';
import CTA from '../styled/CTA';
import PlanOption from '../components/PlanOption';
import { Plan } from '../models/Plan.model';

const LandingPage = () => {
    const plans: Plan[] = [
        {
            price: 27.90,
            description: 'No Disney+ você encontra as últimas estreias do cinema, originais e clássicos inesquecíveis.',
            image: '',
            type: 'standard'
        },
        {
            price: 45.90,
            description: 'Assine Disney+ e Star+ juntos. Economize e aproveite agora os dois serviços por um preço único.',
            image: '',
            type: 'bundle'
        },
        {
            price: 55.90,
            description: 'Disney+, Star+ e STARZPLAY em um plano especial. Assine agora os três serviços juntos.',
            image: '',
            type: 'starzplaybundle'
        },
    ]
    
    return (
        <>
        <HeroContainer>
            <HeroBackground background='/images/hero-bg-sm.jpg' media="max-width: 1024px" />
            <HeroBackground background='/images/hero-bg-lg.jpg' media="min-width: 1025px" />

            <HeroContent>
                <h3>As melhores histórias em um só lugar.</h3>

                <HeroLogo src="/images/disney-logo.svg" alt="Disney Logo" />

                <CTA href="#plan-selector">Escolha Seu Plano</CTA>
            </HeroContent>
        </HeroContainer>

        <Container>
            <Content>
                <h1>Escolha seu Plano</h1>

                <PlansList id="plan-selector">
                    { plans.map(plan => <PlanOption plan={plan} key={plan.type}/>) }
                </PlansList>
            </Content>
        </Container>
        </>
    );
};

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Content = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    padding: 5.6vw;
    position: relative;

    & > * {
        margin-bottom: 24px;
    }
`;

const HeroContainer = styled(Container)`
    @media screen and (max-width: 1024px) {
        padding-top: 54vw;
    }
    
    @media only screen and (min-width: 1025px) {
        align-items: flex-start;
    }
`;

interface HeroBackgroundProps {
    background: string;
    media: string;
}

const HeroBackground = styled.div<HeroBackgroundProps>`
    display: none;
    background-image: url(${ props => props.background });
    background-repeat: no-repeat;
    background-position: top;
    background-size: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    pointer-events: none;
    position: absolute;
    z-index: -1;

    @media only screen and (${ props => props.media }) {
        display: block;
    }
`;

const HeroContent = styled(Content)`
    @media only screen and (min-width: 1025px) {
        width: 50%;
    }
`;

const HeroLogo = styled.img`
    margin-left: auto;
    margin-right: auto;
    max-width: 180px;

    @media only screen and (max-width: 768px) {
        max-width: 180px;
    }

    @media only screen and (min-width: 769px) {
        max-width: 320px;
    }
`;

const PlansList = styled.ul`
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 0;
    width: 100%;

    @media only screen and (max-width: 769px) {
        flex-direction: column;
        align-items: center;
    }
`;

export default LandingPage;