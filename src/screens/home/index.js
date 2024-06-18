import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { nanoid } from "nanoid";
import Header from "../../components/header";
import Footer from "../../components/footer";
import PageLoader from "../../components/page-loader";
import BBQCard from "../../components/bbq-card";
import BBQDetails from "../../components/bbq-details";
import * as S from "./styles";

const NEW_BBQ_ID = "NEW_BBQ_ID";

function Home(props) {
  const history = useHistory();
  const alert = useAlert();
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [bbqs, setBbqs] = useState([]);
  const [currentBBQ, setCurrentBBQ] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      history.push("/login");
      return;
    }

    setUsername(localStorage.getItem("username"));

    const getBBQs = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${process.env.REACT_APP_API_URL}/bbqs`, {
          method: "GET",
          headers: new Headers({
            authorization: `Bearer ${token}`,
          }),
        });

        const data = await response.json();
        if (!data.error) {
          setBbqs(data.bbqs);
        } else {
          alert.error(data.error);
        }
      } catch (error) {
        alert.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getBBQs();
  }, [history, alert]);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      <Header title="Agenda de Churras" username={username} />
      <S.Content>
        <AnimateSharedLayout type="crossfade">
          <S.BBQList>
            {bbqs.map((bbq) => {
              const id = bbq.id || nanoid();

              return (
                <motion.div
                  key={id}
                  layoutId={id}
                  onClick={() => setCurrentBBQ(id)}
                >
                  <BBQCard {...bbq} />
                </motion.div>
              );
            })}
            <motion.div
              layoutId={NEW_BBQ_ID}
              onClick={() => setCurrentBBQ(NEW_BBQ_ID)}
            >
              <S.AddBBQCard>
                <S.IconWrapper>
                  <svg width="32" height="32" viewBox="0 0 11 11">
                    <path
                      d="M4 1.75s0-1 1-1c0 0 .5 0 .5-.5a.25.25 0 1 1 .5 0s0 1-1 1c0 0-.5 0-.5.5a.25.25 0 1 1-.5 0zM2.25 2a.25.25 0 0 0 .25-.25c0-.5.5-.5.5-.5c1 0 1-1 1-1a.25.25 0 1 0-.5 0c0 .5-.5.5-.5.5c-1 0-1 1-1 1c0 .138.112.25.25.25zm4 0a.25.25 0 0 0 .25-.25c0-.5.5-.5.5-.5c1 0 1-1 1-1a.25.25 0 1 0-.5 0c0 .5-.5.5-.5.5c-1 0-1 1-1 1c0 .138.112.25.25.25zm3.5-2a.25.25 0 0 0-.25.25c0 .5-.5.5-.5.5c-1 0-1 1-1 1a.25.25 0 1 0 .5 0c0-.5.5-.5.5-.5c1 0 1-1 1-1A.25.25 0 0 0 9.75 0zM6.675 5.865l-.001.001l2.3 4.782v.009a.242.242 0 0 1-.12.32a.247.247 0 0 1-.328-.12L7.845 9.5H4a1.5 1.5 0 1 1-.91-1.379c.053.02.105.045.155.072L4.278 5.85A3.038 3.038 0 0 1 2 3h7s-.002 2.282-2.325 2.865zM3.25 9.5a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0zm2.923-3.544C5.963 5.983 5.742 6 5.5 6c-.285 0-.713-.047-.713-.047l-1.144 2.58c.123.136.218.295.279.467h3.673L6.173 5.956z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </S.IconWrapper>
                <div>Adicionar Churras</div>
              </S.AddBBQCard>
            </motion.div>
          </S.BBQList>
          <AnimatePresence>
            {currentBBQ !== null && currentBBQ !== NEW_BBQ_ID && (
              <S.DetailsWrapper>
                <S.BBQDetailsWrapper layoutId={currentBBQ}>
                  <BBQDetails
                    isEditing
                    {...bbqs.find((bbq) => bbq.id === currentBBQ)}
                    onClose={() => setCurrentBBQ(null)}
                    onBBQDeleted={(bbq) => {
                      setCurrentBBQ(null);
                      setBbqs((bbqs) => bbqs.filter((b) => b.id !== bbq));
                    }}
                    onBBQSaved={(bbq) => {
                      setCurrentBBQ(null);
                      setBbqs((state) => {
                        return state.map((b) => {
                          if (b.id.toString() === bbq.id.toString()) {
                            return {
                              ...b,
                              guests: bbq.guests,
                            };
                          }

                          return b;
                        });
                      });
                    }}
                  />
                </S.BBQDetailsWrapper>
              </S.DetailsWrapper>
            )}

            {currentBBQ !== null && currentBBQ === NEW_BBQ_ID && (
              <S.DetailsWrapper>
                <S.BBQDetailsWrapper layoutId={NEW_BBQ_ID}>
                  <BBQDetails
                    onClose={() => {
                      setCurrentBBQ(null);
                    }}
                    onBBQAdded={(bbq) => {
                      setCurrentBBQ(null);
                      setBbqs((bbqs) => bbqs.concat(bbq));
                    }}
                  />
                </S.BBQDetailsWrapper>
              </S.DetailsWrapper>
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </S.Content>
      <Footer />
    </>
  );
}

export default Home;
