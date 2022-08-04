import styled from 'styled-components';
import { Plan } from '../models/Plan.model';

interface Props {
    plan: Plan;
}

const PlanOption = ({ plan }: Props) => {
    return (
        <PlanOptionComponent isBestDeal={plan.type === 'bundle'}>
            <picture>
                <source media="(min-width: 1025px)" srcSet={`./images/${plan.type}.png`} />
                <img src={`./images/${plan.type}.png`} alt={plan.type} width="420" height="120" loading="lazy" />
            </picture>

            <h3>{plan.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}/mês*</h3>

            <PlanDescription>{plan.description}</PlanDescription>
        </PlanOptionComponent>
    )
};

interface PlanOptionComponentProps {
    isBestDeal: boolean;
}

const PlanOptionComponent = styled.li<PlanOptionComponentProps>`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 40px 0;
    margin-top: 40px;
    max-width: 380px;
    background-image: url(${props => props.isBestDeal ? '/images/best-deal.png' : ''});
    background-position: top;
    background-repeat: no-repeat;
    background-size: 100%;

    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        padding: 60px 36px 0;
    }

    @media only screen and (min-width: 1025px) {
        padding: 60px 44px 0;
    }

    h3 {
        margin-top: 24px;
        font-size: 22px;
        line-height: 32px;
    }


    @media only screen and (min-width: 1025px) {
        font-size: 28px;
        line-height: 38px;
    }

    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        font-size: 24px;
        line-height: 34px;
    }

    img {
        display: block;
        height: auto;
        width: 100%;
    }
`;

const PlanDescription = styled.p`
    color: silver;
    font-size: 15px;
    line-height: 25px;

    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        font-size: 16px;
        line-height: 26px;
    }

    @media only screen and (min-width: 1025px) {
        font-size: 18px;
        line-height: 28px;
    }
`;

export default PlanOption;