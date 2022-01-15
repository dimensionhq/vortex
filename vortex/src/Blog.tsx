import React from 'react';
import Default from './Blog/Default';
import DevTO from './Blog/DevTO';
import Hashnode from './Blog/Hashnode';
import { BlogProps, defaultProps } from './types/index';

const Blog: React.FC<BlogProps> = (props) => {
    const f_props = { ...defaultProps, ...props };
    if (f_props.layout === "DevTO") {
        return (
            <DevTO {...f_props} />
        );
    } else if (f_props.layout === "Hashnode") {
        return (
            <Hashnode {...f_props} />
        );
    }
    else {
        return (
            <Default {...f_props} />
        );
    }

}

export default Blog;