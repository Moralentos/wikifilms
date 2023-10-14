import React from "react";
import "./single.scss";
import { useSelector, useDispatch } from "react-redux";
import { getSingleData, getSingleStaff } from "../../Redux/singlePageSlice";
import { useParams } from "react-router-dom";

const Single = () => {
  const singleData = useSelector((state) => state.singleSlice.singleData);
  const singleStaff = useSelector((state) => state.singleSlice.singleStaff);

  const dispatch = useDispatch();
  const { id } = useParams();

  const findStaff = () => {
    return singleStaff.find((item) => item.professionKey === "DIRECTOR");
  };

  React.useEffect(() => {
    dispatch(getSingleData(id));
    dispatch(getSingleStaff(id));
  }, [dispatch]);

  return (
    <div className="container single-wrapper">
      <div className="top-single">
        <div className="img-single">
          <img src={singleData.coverUrl} alt="" />
        </div>
        <div className="present">
          <div>
            <h1>{singleData.nameRu}</h1>
            <h1>{singleData.nameRu}</h1>
            <h2>{singleData.year}</h2>
            <h3>{singleData.nameEn}</h3>
            <span>{singleData.description}</span>
          </div>
          <iframe width="560" height="315"></iframe>
        </div>
      </div>
      <div className="body-single">
        <div className="staff">
          <span>
            Режиссер: <span>{singleStaff.nameRu}</span>{" "}
          </span>
          <span>Продюсер:</span>
        </div>
        <div className="actors">
          <span className="span-actors">Актеры:</span>
          <div>
            <div>
              <div className="img">
                <img
                  src="https://cdn.7days.ru/upload/images/ddc/f95ca7b798f607b168f3fa1083dcf.jpg"
                  alt=""
                />
              </div>
              <span>Джон Уик</span>
            </div>
            <div>
              <div className="img">
                <img
                  src="https://cdn.7days.ru/upload/images/ddc/f95ca7b798f607b168f3fa1083dcf.jpg"
                  alt=""
                />
              </div>
              <span>Джон Уик</span>
            </div>
            <div>
              <div className="img">
                <img
                  src="https://cdn.7days.ru/upload/images/ddc/f95ca7b798f607b168f3fa1083dcf.jpg"
                  alt=""
                />
              </div>
              <span>Джон Уик</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <span>Скриншоты</span>
        <div>
          <div className="bottom-img">
            <img
              src="https://kinotv.ru/upload/setka-editor/0f0/vah7z549hi2a1vz2dz8yiocuzlfrv9po.jpeg"
              alt=""
            />
          </div>
          <div className="bottom-img">
            <img
              src="https://kinotv.ru/upload/setka-editor/0f0/vah7z549hi2a1vz2dz8yiocuzlfrv9po.jpeg"
              alt=""
            />
          </div>
          <div className="bottom-img">
            <img
              src="https://kinotv.ru/upload/setka-editor/0f0/vah7z549hi2a1vz2dz8yiocuzlfrv9po.jpeg"
              alt=""
            />
          </div>
          <div className="bottom-img">
            <img
              src="https://kinotv.ru/upload/setka-editor/0f0/vah7z549hi2a1vz2dz8yiocuzlfrv9po.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
