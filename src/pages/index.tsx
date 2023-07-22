import { decrement, increment } from "@features/counterSlice"
import { RootState } from "@features/store"
import { useDispatch, useSelector } from "react-redux"

const Home = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <h2>
        {count}

      </h2>

      <br />
      <br />

      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </>
  )
}

export default Home
