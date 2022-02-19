import { Modal} from "react-bootstrap";
import LoginForm from "../forms/loginForm.component";
import SignupForm from "../forms/signupForm.component";

export default function VerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            centered
        >
            { props.isLogin  ? <LoginForm close={props.onHide} /> : <SignupForm close={props.onHide} /> }
        </Modal>
    );
}

