import qs from 'qs';
import fetch from '../../lib/fetch';

export const CONTEXTPATH = window.CONTEXTPATH = window.CONTEXTPATH || '/orm'

export const xService = async (param) => {
	return await fetch(`/path/to/service.do`, qs.stringify(param) /*, config => (config.headers['Content-Type'] = 'application/json; chartset=UTF-8', config)*/)
	// 可以自定义修改axios实例
};

export const getUserInfo = async (param) => {
		return await fetch.get(`${CONTEXTPATH}/student/query.do?id=3`, qs.stringify(param))
};

export const queryById = async (param) => {
	return await fetch(`${CONTEXTPATH}/student/query.do`, qs.stringify(param))
};

export const queryAll = async (param) => {
	return await fetch.get(`${CONTEXTPATH}/student/queryAll.do`, qs.stringify(param))
};

export const deleteById = async (param) => {
	return await fetch(`${CONTEXTPATH}/student/delete.do`, qs.stringify(param))
};

export const addStudent = async (param) => {
	return await fetch(`${CONTEXTPATH}/student/addStudent.do`, qs.stringify(param))
};

export const editStudent = async (param) => {
	return await fetch(`${CONTEXTPATH}/student/update.do`, qs.stringify(param))
};

