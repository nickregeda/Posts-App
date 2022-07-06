import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = (props) => {
    return (
        <div>
            <MyInput
                value={props.filter.query}
                onChange={e => props.setFilter({...props.filter, query: e.target.value})}
                placeholder={'Enter post you wanna find'}/>
            <MySelect
                value={props.filter.sort}
                onChange={selectedSort => {
                    props.setFilter({...props.filter, sort: selectedSort})
                }}
                defaultValue={'Sort by'}
                options={[{id: 1, name: 'by name', value: 'title'}, {id: 2, name: 'by desc', value: 'body'}]}/>
        </div>
    );
};

export default PostFilter;