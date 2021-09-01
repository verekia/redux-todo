import Input from '../components/Input'
import Tasks from '../components/Tasks/Tasks'
const IndexPage = () => {
  return (
    <div
      style={{
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          display: 'inline-block',
        }}
      >
        <h1
          style={{
            backgroundColor: 'rgb(245,245,245)',
            fontSize: '100px',
            color: 'rgba(175, 47, 47, 0.15)',
            textAlign: 'center',
          }}
        >
          Todos
        </h1>
        <div
          style={{
            boxShadow:
              '0 1px 5px 0 rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),0 3px 1px -2px rgb(0 0 0 / 12%)',
          }}
        >
          <Input />
          <Tasks />
        </div>
      </div>
    </div>
  )
}

export default IndexPage
