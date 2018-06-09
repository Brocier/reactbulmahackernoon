//* Blog Sagas *//
import * as contentful from 'contentful'
import {all, call, put, takeLatest} from 'redux-saga/effects'
import {actions} from './../Blog'
import * as types from './types'

const client = contentful.createClient({space: '2mvesjofoymx', accessToken: '263961428e3cbede5034d86bce47b122d1be0c19b0bd3ca837aaf3bc6c4a4f1d'})

const fetchPosts = () => client.getEntries()

const fetchBlogPosts = () => function * getBlogPosts() {
  try {
    const posts = yield call(fetchPosts)
    yield put(actions.success(posts.items))
  } catch (error) {
    console.log(error)
    yield put(actions.error(error))
  }
}

export default function * () {
  yield all([takeLatest(types.GET_BLOG_ASYNC.PENDING, fetchBlogPosts)])
}