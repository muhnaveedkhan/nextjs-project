export default function PostDetails( { params }: { params: { postid: string } }){
    return (
        <>
            <h1> This is {params.postid} post</h1>
        </>
    );
}