import { useState } from "react"

function Detail({ series }) {
  return (
    <div className="series-detail-wrapper">
      <div
        className="series-detail-inner"
        style={{ background: `url(${series.backDropPath})` }}
      >
        <div className="series-detail-poster">
          <img src={series.posterPath} alt={series.name} />
        </div>
        <div className="series-detail-info">
          <p className="series-title">{series.name}</p>
          <p>{series.overview}</p>
          <p>
            <span>개봉일자</span>
            <span>{series.firstAirDate}</span>
          </p>
          <p>
            <span>런타임</span>
            <span>{`총 ${series.seasonCnt}시즌 ${series.episodeCnt}에피소드 구성`}</span>
          </p>
          <p>
            <span>관람 연령</span>
            <span>{series.isAdult ? "성인 관람가" : "전체 관람가"}</span>
          </p>
          <p>
            <span>장르</span>
            <span>{series.genres?.join(", ")}</span>
          </p>
          <p>
            <span>추천율(추천수)</span>
            <span>
              {series.voteAverage}%({series.voteCount})
            </span>
          </p>
          <p>
            <span>제작사</span>
            <span>{series.companies?.map((c) => c.name).join(", ")}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Detail
