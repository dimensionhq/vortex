import { useState, useEffect } from "react";
import { BlogProps, Reaction as TReaction } from "../../types/Blog";

export const Reaction: React.FC<BlogProps> = (props) => {
  let [final_reactions, set_final_reactions] = useState<TReaction[][]>([]);
  let [reaction_visible, set_reaction_visible] = useState(false);

  const setIsVisible = () => {
    if (window.scrollY <= 300) {
      set_reaction_visible(false);
    } else {
      set_reaction_visible(true);
    }
  };
  useEffect(() => {
    let reactions_length = props.reactions?.reactions.length ?? 0;
    let final_reactions_temp: TReaction[][] = [];
    for (let index = 0; index < reactions_length; index++) {
      let fr = [props.reactions?.reactions[index]];
      if (index != reactions_length - 1) {
        fr.push(props.reactions?.reactions[index + 1]);
      }
      index += 1;
      final_reactions_temp.push(fr as any);
    }
    set_final_reactions(final_reactions_temp);
    window.addEventListener("scroll", setIsVisible);
    // set reaction_visible = true after scrolling 2000px
  }, []);
  return (
    <div className="w-full h-full col-span-2  flex items-center justify-start md:justify-center transition-all duration-150">
      <div className="md:fixed md:bottom-[50%] flex md:flex-col">
        {reaction_visible ? (
          <>
            {final_reactions?.map((reactions, i) => (
              <div className="grid grid-cols-2" key={i}>
                {reactions.map((reaction) => (
                  <div
                    onClick={() => {
                      props.reactions?.onClick(reaction.name);
                    }}
                    key={reaction.name}
                    className="text-2xl gap-2 flex items-center px-2 py-2 bg-opacity-30 hover:bg-slate-50 transition-all duration-100 rounded-md cursor-pointer col-span-1"
                  >
                    {reaction.emote}
                    <span className="text-lg font-semibold">
                      {reaction.upvotes}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Reaction;
