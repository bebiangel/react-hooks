# React Hooks Practice

React version : 16.7.0-alpha</br>
Should not use your products

React Hooks 의 가장 큰 특징으로는 함수형 컴포넌트에서도 클래스 컴포넌트의 상태 관리와 라이프사이클의 사용을 할 수 있다는 점입니다.

## **Hooks 규칙**

- Hooks 는 가장 상단에서 호출한다. 반복문, 조건문 내부 그리고 nested 함수에서 호출하지 않는다.
- React function 컴포넌트에서만 호출한다. 일반적인 JavaScript 에서는 호출하지 않는다.

## useState

Hooks 는 렌더링시에 초기값을 한번만 호출한다.</br>
Hooks 는 여러개 선언이 가능하며 기본구조는 아래와 같다.

```javascript
const [name, setName] = useState("Lionel");
const [surname, setSurname] = useState("Messi");
```

부모 컴포넌트에서 하위 컴포넌트로 내려준 prop 을 초기값으로 셋팅하고 싶으면 아래와 같이 사용할 수 있다.

```javascript
const [name, setName] = useState(() => {
    const initialState = props;
    return initialState;
}
```

## useEffect

componentDidMount, componentDidUpdate, componentWillUnmount 와 같은 기능을 수행할 수 있다.
useEffect 를 호출할때, React 는 변화된 DOM 을 적용한 후에 “effect” 함수를 실행한다.
Effect 들은 컴포넌트 내부에 선언되어있어서 props 와 state 로 접근이 가능하다.

## useContext

## useReducer

## useRef
