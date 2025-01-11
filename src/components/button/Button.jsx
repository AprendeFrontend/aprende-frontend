import { StyledButton } from './button.styles';

const Button = ({ action, children }) => {
	return <StyledButton onClick={action}>{children}</StyledButton>;
};

export default Button;
