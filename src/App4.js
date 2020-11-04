import React, { useState, useEffect, useCallback } from 'react';

class App1 extends React.Component {
   state = {
      value1: 0,
      value2: 0,
   };
   onClick = () => {
      this.setState({ value1: 10 });
   };

   render() {
      const value1 = this.state;
      return (
         <div>
            Hello App1
            <hr />
            {value1}
            <button onClick={this.onClick}></button>
         </div>
      );
   }
}

function PostDetailComponent({ post }) {
   const { title, content } = post;
   return (
      <div>
         <h1>{title}</h1>
         {content}
      </div>
   );
}

function PostDetail({ postId }) {
   //const [error, setError] = useState();
   const [post, setPost] = useState();

   useEffect(() => {
      //console.log('changed post id :', postId);
      setPost({ title: '포스팅제목', content: `포스팅내용... : ${postId}` });
      //setInterval(() => {}, 1000);
      return () => {
         //unmount 시에 호출
         //clearInterval(...)
      };
   }, [postId]);

   return (
      <div>
         <h1>Post #{postId}</h1>
         {!post && '로딩중'}
         {post && <PostDetailComponent post={post} />}
      </div>
   );
}

function Clock() {
   const [date, setDate] = useState(new Date());
   useEffect(() => {
      const interval = setInterval(() => setDate(new Date()), 1000);
      return () => {
         clearInterval(interval);
      };
   }, []);
   return <div>현재시간은 {date.toISOString().slice(11, 19)} 입니다.</div>;
}

function App2() {
   const [value1, setValue1] = useState(0);
   const [value2, setValue2] = useState(0);
   const [value, setValue] = useState({ value1: 0, value2: 0 });
   const [postId, setPostId] = useState(1);

   //useEffect(() => {}); // render 시 호출
   //useEffect(() => {}, []); // mount 시 호출
   //useEffect(() => {}, [value]); //value 가 변경될 시에 호출
   useEffect(() => {
      console.log('mount');
   }, []);
   useEffect(() => {
      console.log('chnaged value', value);
   }, [value]);

   const onClick = useCallback(() => {
      //   setValue({ ...value, value1: 10 });
      setValue((prevState) => ({ ...prevState, value1: 10 }));
   }, []);
   return (
      <div>
         <Clock />
         Hello App2
         <hr />
         {JSON.stringify(value)}
         <button onClick={onClick}>click</button>
         <hr />
         <button onClick={() => setPostId(100)}>100번 글 보기</button>
         <PostDetail postId={postId} />
      </div>
   );
}

export default App2;
