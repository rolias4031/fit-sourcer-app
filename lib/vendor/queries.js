/* eslint-disable import/prefer-default-export */
import { useQuery } from 'react-query';
import { baseUrl } from '../constants';

async function fetchUserProfile() {
  const url = 'http://localhost:3000/api/user/get-profile';
  const fetchOptions = {
    method: 'GET',
  };
  const response = await fetch(url, fetchOptions);
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }
  return result.profile;
}

async function basicFetch(url) {
  const response = await fetch(url, { method: 'GET' });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }
  return result;
}

export const useGetUserProfile = () =>
  useQuery(['get-user-profile'], fetchUserProfile);

export const useGetVendorProfile = () =>
  useQuery(['vendor', 'profile'], () =>
    basicFetch(`${baseUrl}/api/vendor/get-vendor`),
  );

export const useGetGarmentDetail = (id) =>
  useQuery(['vendor', 'garment', id], () =>
    basicFetch(`${baseUrl}/api/garment/${id}`),
  );
