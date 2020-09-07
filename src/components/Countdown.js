import React, { useEffect } from 'react'
import styled from '@emotion/styled'

const Clock = styled.div`
  text-align: center;
  border: 1px solid tomato;
  width:20rem;
  margin:4rem auto 0 auto;
  padding:2rem;
  border-radius:4px;
  * {
    color: ${props => props.theme.colors.primary};
  }
`

const CountDown = (props) => {
  const [counter, setCounter] = React.useState(99);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

    return () => clearInterval(timer);
  }, [counter]);

  return (
    <Clock className="CountDown" {...props}>
      <h2>Countdown:</h2>
      <h1>{counter}</h1>
    </Clock>
  );
}

export default CountDown