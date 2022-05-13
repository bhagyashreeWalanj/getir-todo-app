<!-- ![Tests](https://github.com/cakirilker/a1-car-app/workflows/Tests/badge.svg) -->

![Build and Deploy](https://github.com/cakirilker/a1-car-app/workflows/Build%20and%20Deploy/badge.svg)

# Getir Frontend Code Challenge

> This is an implemenation of the to-do app for Getir code challenge.

## Project information

- Developed using React,Typescript, Redux and Redux-Saga.
- Tested using Jest and Enzyme.
- React Version `^16.13.0`
- Node version `v14.17.3` (LTS)
- Running Application available on [Netlify](https://getir-todo-bhagyashree.netlify.app/)

## Project structure

- `src` Base app files.
- `src/actions` All the redux code. constants, types, interfaces and actions.

- `src/components` Reusable components, in this case TodoList

  - `src/components/TodoList` Implementation of the TodoList component and its
    sub-components.
  - `src/components/TodoApp` Implementation of the Todo create and Add new component
  - `src/components/TodoAppEditModal` Implementation of the Todo Edit Modal using React-Modal library
  - `src/components/Alert` Implementation of Alert component to show error/success notification

- `src/.containers` redux container to map all actions and store
- `src/model` Interface for todo
- `src/store` Implementation of mock server details and methods and Creation of the store
- `src/reducers` Root reducer and component reducers
- `src/sagas` Implementation of Root saga and other sagas
- `src/tests` Folder for tests files,
- `src/styles` folder for scss files

## Technical Documentation

1. Users can able to add a new task to their to-do list. (clickable `TO DO` button)
2. Users can able to list their tasks in the list.
3. Tasks have two statuses like INCOMPLETE / COMPLETED.
4. Users must be able to change the status of the tasks By checkbox feature.
5. User can change the task name by edit feature
6. Completed tasks are shown as a separate list below Incomplete tasks.
7. User can remove the task by Remove button feature.
8. User can clear the task list by clear all button feature.

## Database :

I tried to use json-server for backend implementation :

```zsh
# (JSON-server : https://my-json-server.typicode.com/bhagyashreeWalanj/tasks/tasks)
```

- but for real time changes , I have been using mockapi server for create, update and delete operations of to-do list
- [MockApi](https://mockapi.io/)

```zsh
# (mockAPi : https://624b52c271e21eebbcf0b4ba.mockapi.io/tasks)
```

## Sample mocked Json

```
[
    {
        "id": "1",
        "title": "Hello World 1",
        "createdAt": "01/05/2022",
        "completed": true,
    },
    {
        "id": "2",
        "title": "Hello World 2",
        "createdAt": "02/05/2022",
        "completed": true,
    },
]

```

## Third Party Libraries

- [TypeScript](https://www.typescriptlang.org/) for static type checking.
- [React / create-react-app](https://github.com/facebook/create-react-app)
- [Redux](https://redux.js.org/)
- [Redux-saga](https://redux-saga.js.org/)
- [Jest](https://jestjs.io/) for testing
- [Enzyme](https://airbnb.io/enzyme/) for testing
- [enzyme-adapter-react-16](https://enzymejs.github.io/enzyme/docs/installation/react-16.html) an adapter between React and Enzyme. This will be executed before running the tests.

- [React Icons](https://react-icons.github.io/react-icons) for icons
- [classnames](https://jedwatson.github.io/classnames/) for for conditionally joining classNames together.
- [sass](https://sass-lang.com/install) for CSS extension
- [Axios](https://github.com/axios/axios) for api calls.
- [MockApi](https://mockapi.io/) for mocked data

## TODO's

If I had a little more time to invest on this code assignment, I would probably
focus on:

- Extract some code into components, for example pending tasks and completed tasks
- Add more coverage for the sagas tests
- On clear button, clears current tasks from the UI, and doesn't affect actual mock data. As soon as You refresh the page, it displays all tasks. Note: I have used the redux for clear all method.

## Project commands

### Install dependencies

```zsh
npm i
```

### Running the project

```zsh
# (make sure dependencies have been installed before.)
npm start
```

### Executing tests

This project contains an extensive suite of tests and makes use of [Jest](https://jestjs.io/) and [Enzyme](https://github.com/airbnb/enzyme).

Run all tests by executing.

```zsh
# (make sure dependencies have been installed before.)
npm test
```

```zsh
npm run test -- -u
```
