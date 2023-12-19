import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userSelector } from '../redux/reducer'
import { userThunk } from '../redux/reducer'


const List = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userThunk())
  }, [])

  const userData = useSelector(userSelector)
  console.log(userData)

  return (
    <div>
      {
        userData.map((item, index) => {
          return <div key={index}>
                  <div>{item.name}</div>
                  <div>{item.email}</div>
                  <hr />
          </div>
        })
      }
    </div>
  )
}

export default List
