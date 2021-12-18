import { useState, useEffect } from "react";
import { BlogProps, Reaction as TReaction } from "../../types/Blog";

export const Reaction: React.FC<BlogProps> = (props) => {
  let [final_reactions, set_final_reactions] = useState<TReaction[][]>([]);
  let [reaction_visible, set_reaction_visible] = useState(false);

  const setIsVisible = () => {
    if (window.scrollY <= 500) {
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
        <div className="w-full h-full col-span-2  flex items-center justify-start md:justify-center transition-all duration-150">
          <div className="md:fixed md:bottom-[50%] flex md:flex-col">
            {reaction_visible ? (
              <>
                {final_reactions?.map((reactions, i) => (
                  <div className="grid grid-cols-2" key={i}>
                    {reactions.map((reaction) => (
                      <div
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
                        className={`text-2xl gap-2 flex items-center px-1 py-1 mx-1 my-1 transition-all duration-100 rounded-md cursor-pointer col-span-1 text-opacity-100`}
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
      ) : (
        <></>
      )}
    </>
  );
};

export default Reaction;
