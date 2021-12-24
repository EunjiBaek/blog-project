import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFiled, initializeForm, register } from "../../modules/auth";
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';
import { withRouter } from "react-router-dom";



const RegisterForm = ({ history }) => {
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
        form: auth.register,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user
    }));

    // 인풋 변경 이벤트 핸들러
    const onChange = e => {
        const { value, name } = e.target;

        dispatch(
            changeFiled({
                form: 'register',
                key: name,
                value
            })
        )
    }

    // 폼 등록 이벤트 핸들러
    const onSubmit = e => {
        e.preventDefault();
        const { username, password, passwordConfirm } = form;
        // 하나라도 비어 있다면
        if ([username, password, passwordConfirm].includes('')) {
            setError('빈칸을 모두 입력하세요');
            return;
        }

        if (password !== passwordConfirm) {
            setError('비밀번호가 일치하지 않습니다');
            dispatch(changeFiled({ form: 'register', key: 'password', value: ''}));
            dispatch(changeFiled({ form: 'register', key: 'passwordConfirm', value: ''}));
            return;
        }

        dispatch(register({ username, password }));

    }

    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);


    // 회원가입 성공/실패 처리
    useEffect(() => {
        if (authError) {
            // 계정명이 이미 존재할때
            if (authError.response.status === 409) {
                setError('이미 존재하는 계정입니다');
                return;
            }

            // 기타 이유
            setError('회원가입 실패');
            return;
        }

        if (auth) {
            console.log('회원가입 성공');
            console.log(auth);
            dispatch(check())
        }

    }, [auth, authError, dispatch]);

    useEffect(() => {
        if (user) {
            history.push('/');
            try {
                localStorage.setItem('user', JSON.stringify(user));
            } catch(e) {
                console.log('localstorage is not working');
            }
        }
    }, [user, history]);


    return (
        <AuthForm 
            type="register"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            error={error}
        />
    )
}

export default withRouter(RegisterForm);

