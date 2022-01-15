import { useState, useEffect } from "react";
import styled from "styled-components";
import { BlogProps, Reaction as TReaction } from "../../../types/index";

export const Reaction: React.FC<BlogProps> = (props) => {
    let [final_reactions, set_final_reactions] = useState<TReaction[][]>([]);
    let [reaction_visible, set_reaction_visible] = useState(false);

    const setIsVisible = () => {
        if (window.scrollY <= 200) {
            set_reaction_visible(false);
        } else {
            set_reaction_visible(true);
        }
    };

    useEffect(() => {
        let reactions_length = props.reactions?.reactions.length ?? 0;
        let final_reactions_temp: TReaction[][] = [];

        for (let index = 0; index < reactions_length; index++) {
            let fr = [
                {
                    ...props.reactions?.reactions[index],
                    upvoted: props.reactions?.reactions[index].upvoted ?? false,
                },
            ];
            if (index != reactions_length - 1) {
                fr.push({
                    ...props.reactions?.reactions[index + 1],
                    upvoted: props.reactions?.reactions[index + 1].upvoted ?? false,
                });
            }
            index += 1;
            final_reactions_temp.push(fr as any);
        }

        set_final_reactions(final_reactions_temp);
        window.addEventListener("scroll", setIsVisible);
    }, [reaction_visible]);

    const onClick = (val: string) => {
        let reactions = [...final_reactions];
        reactions.map((reaction) => {
            reaction.map((r) => {
                if (r.name == val) {
                    r.upvoted = !r.upvoted;
                    if (r.upvoted) {
                        r.upvotes += 1;
                    } else {
                        r.upvotes -= 1;
                    }
                }
            });
        });
        set_final_reactions(reactions);
    };

    return (
        <>
            {final_reactions.length !== 0 ? (
                <Root>
                    <Child>
                        {reaction_visible ? (
                            <>
                                {final_reactions?.map((reactions, i) => (
                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} key={i}>
                                        {reactions.map((reaction) => (
                                            <Button
                                                onClick={() => {
                                                    onClick(reaction.name);
                                                    props.reactions?.onClick(
                                                        reaction.name,
                                                        reaction.upvoted ?? false
                                                    );
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.backgroundColor =
                                                        props.theme?.inlineBgColor + "05" ?? "transparent";
                                                }}
                                                onMouseLeave={(e) => {
                                                    if (!reaction.upvoted) {
                                                        e.currentTarget.style.backgroundColor =
                                                            "transparent";
                                                    }
                                                }}
                                                key={reaction.name}
                                                style={{
                                                    backgroundColor: reaction.upvoted
                                                        ? props.theme?.inlineBgColor + "05"
                                                        : "transparent",
                                                }}
                                            >
                                                {reaction.emote}
                                                <span className="text-lg font-semibold">
                                                    {reaction.upvotes}
                                                </span>
                                            </Button>
                                        ))}
                                    </div>
                                ))}
                            </>
                        ) : (
                            <div></div>
                        )}
                    </Child>
                </Root>
            ) : (
                <></>
            )}
        </>
    );
};
const Root = styled.div`
    display: flex; 
    transition-property: all; 
    transition-duration: 150ms; 
    display: flex;
    justify-content: center; 
    align-items: center; 
    height: 100%; 
    grid-column: span 2 / span 2; 


    @media (min-width: 768px) { 
        justify-content: flex-end; 
    }

`

const Button = styled.div`
    display: flex; 
    padding-top: 0.25rem;
    padding-bottom: 0.25rem; 
    padding-left: 0.25rem;
    padding-right: 0.25rem; 
    margin-top: 0.25rem;
    margin-bottom: 0.25rem; 
    margin-left: 0.25rem;
    margin-right: 0.25rem; 
    transition-property: all; 
    transition-duration: 100ms; 
    text-opacity: 1; 
    font-size: 1.5rem;
    line-height: 2rem; 
    display: flex; 
    align-items: center; 
    border-radius: 0.375rem; 
    cursor: pointer; 
    grid-column: span 1 / span 1; 
    gap: 0.5rem; 
`

const Child = styled.div`
    display: flex; 
    @media (min-width: 768px) { 
        position: fixed; 
        flex-direction: column; 
     }
`
export default Reaction;
