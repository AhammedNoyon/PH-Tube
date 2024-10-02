const loadVideo = () => {
  const url = "https://openapi.programming-hero.com/api/phero-tube/videos";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayVideo(data.videos))
    .catch((error) => console.log(error));
};

/*
const cardObject = {
  category_id: "1001",
  video_id: "aaaa",
  thumbnail: "https://i.ibb.co/L1b6xSq/shape.jpg",
  title: "Shape of You",
  authors: [
    {
      profile_picture: "https://i.ibb.co/D9wWRM6/olivia.jpg",
      profile_name: "Olivia Mitchell",
      verified: "",
    },
  ],
  others: {
    views: "100K",
    posted_date: "16278",
  },
  description:
    "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey.",
};
*/
const displayVideo = (videos) => {
  //   console.log(videos);
  const videoSection = document.getElementById("vdo-sec");
  videos.forEach((video) => {
    console.log(video);
    const card = document.createElement("div");
    card.innerHTML = `
        <div class="card">
            <figure>
                <img
                class = " h-64 w-full object-cover rounded-b-2xl"
                src= ${video.thumbnail}
                alt="Shoes" />
            </figure>
            <div class="space-y-2 mt-5">
                <div class = "flex gap-5 items-center">
                <img class = "h-10 w-10 object-cover rounded-full" src="${video.authors[0].profile_picture}" alt="" />
                <h3 class = "text-3xl font-bold">${video.title}</h3>
                </div>
                <div class = "ml-[60px]">
                <p class = "flex items-center gap-3">
                <span class = "text-xl font-semibold text-gray-400">${video.authors[0].profile_name}</span>
                <span><img class = "h-5 w-5" src="https://img.icons8.com/?size=48&id=91kLZWvmd4sg&format=png" alt="" /></span>
                </p>
                <p>${video.others.views}</p>
                </div>
            </div>
        </div>
    `;
    videoSection.appendChild(card);
  });
};

loadVideo();
