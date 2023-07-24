const TableSection = () => {
  const users = JSON.parse(window.localStorage.getItem("users") as string)


  return (
    <>
      {
        users?.map((user: any, index: number) => (
          <div key={index}>
            {JSON.stringify(user)}<br /><br />
          </div>
        ))
      }
    </>
  )
}

export default TableSection
