import { createSlice } from "@reduxjs/toolkit";
const postSlice = createSlice({
    name:'post',
    initialState:{
        posts:[],
        selectedPost:null,
    },
    reducers:{
        //actions
        setPosts:(state,action) => {
            state.posts = action.payload;
        },
        setSelectedPost:(state,action) => {
            state.selectedPost = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase('post/likeRealtime', (state, action) => {
            const post = state.posts.find(p => p._id === action.payload);
            if (post) {
                if (!post.likes) post.likes = [];
                // Tùy vào logic, có thể fetch lại post hoặc chỉ tăng số lượng like
                post.likes.push('realtime'); // chỉ để trigger re-render, nên fetch lại từ server nếu cần chính xác
            }
        });
        builder.addCase('post/commentRealtime', (state, action) => {
            const { postId, comment } = action.payload;
            const post = state.posts.find(p => p._id === postId);
            if (post) {
                if (!post.comments) post.comments = [];
                post.comments.push(comment);
            }
        });
    }
});
export const {setPosts, setSelectedPost} = postSlice.actions;
export default postSlice.reducer;