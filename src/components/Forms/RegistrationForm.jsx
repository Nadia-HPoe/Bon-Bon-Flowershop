import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup
    .string()
    .required('Имя пользователя обязательно')
    .min(3, 'Имя пользователя должно содержать не менее 3 символов'),
  email: yup
    .string()
    .required('Электронная почта обязательна')
    .email('Введите корректный адрес электронной почты'),
  password: yup
    .string()
    .required('Пароль обязателен')
    .min(6, 'Пароль должен содержать не менее 6 символов')
    .matches(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву')
    .matches(/[0-9]/, 'Пароль должен содержать хотя бы одну цифру'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Пароли должны совпадать')
    .required('Подтверждение пароля обязательно'),
});

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Регистрационные данные:', data);
    //логика отправки формы на сервер и обработка ответа
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
      <div>
        <label htmlFor="username">Имя</label>
        <input type="text" id="username" {...register('username')} />
        {errors.username && <p>{errors.username.message}</p>}
      </div>
      <div>
        <label htmlFor="usersurname">Фамилия</label>
        <input type="text" id="usersurname" {...register('usersurname')} />
        {errors.usersurname && <p>{errors.usersurname.message}</p>}
      </div>
      <div>
        <label htmlFor="email">e-mail</label>
        <input type="email" id="email" {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="password">Придумайте пароль</label>
        <input type="password" id="password" {...register('password')} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default RegistrationForm;
