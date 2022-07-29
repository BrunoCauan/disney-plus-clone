import styled from 'styled-components';
import { Plan } from '../models/Plan.model';

interface Props {
    plan: Plan;
}

const PlanOption = (props: Props) => {
    return (
        <PlanOptionComponent>
            <h3>{props.plan.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}/mês*</h3>
            <PlanDescription>{props.plan.description}</PlanDescription>
        </PlanOptionComponent>
    )
};

const PlanOptionComponent = styled.li`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const PlanDescription = styled.p`
    color: silver;
`;

export default PlanOption;