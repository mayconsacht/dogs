import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import useForm from '../../hooks/useForm';
import styles from './ProfilePhotoPost.module.css';
import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { PHOTO_POST, PHOTO_UPLOAD_POST } from '../../api';
import Error from '../../components/Helper/Error';
import { useNavigate } from 'react-router-dom';
import { Head } from '../../components/Helper/Head';

type Imagem = {
  raw: File;
  preview: string;
};

export const ProfilePhotoPost = () => {
  const name = useForm();
  const weight = useForm();
  const age = useForm();
  const [img, setImg] = useState({} as Imagem);
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) navigate('/profile');
  }, [data, navigate]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const blobUrl = await handleUploadImage();

    const formData = new FormData();
    formData.append('img', blobUrl);
    formData.append('name', name.value);
    formData.append('weight', weight.value);
    formData.append('age', age.value);

    const { url, options } = PHOTO_POST(
      formData,
      window.localStorage.getItem('token')
    );

    await request(url, options);
  }

  async function handleUploadImage() {
    const { url, options } = PHOTO_UPLOAD_POST(
      img.raw,
      window.localStorage.getItem('token'),
      img.raw.name
    );
    const result = await request(url, options);
    return result.json;
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event && event.target && event.target.files) {
      setImg({
        preview: URL.createObjectURL(event.target.files[0]),
        raw: event.target.files[0],
      } as Imagem);
    }
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title='Post your picture' />
      <form onSubmit={handleSubmit}>
        <Input label='Name' type='text' name='name' {...name}></Input>
        <Input label='Weight' type='number' name='weight' {...weight}></Input>
        <Input label='Age' type='number' name='age' {...age}></Input>
        <input
          className={styles.file}
          type='file'
          name='img'
          id='img'
          onChange={onChange}
        ></input>
        {loading ? <Button disabled>Posting...</Button> : <Button>Post</Button>}
        <Error error={error} />
      </form>

      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};
