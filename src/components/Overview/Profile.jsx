export default function Profile() {
  return (
    <div className="col-lg-5 col-12">
      <div className="custom-block custom-block-profile-front custom-block-profile text-center bg-white">
        <div className="custom-block-profile-image-wrap mb-4">
          <img src="/images/medium-shot-happy-man-smiling.jpg"
               className="custom-block-profile-image img-fluid"
               alt=""/>

          <a href="setting.html" className="bi-pencil-square custom-block-edit-icon"></a>
        </div>

        <p className="d-flex flex-wrap mb-2">
          <strong>Name:</strong>

          <span>Thomas Edison</span>
        </p>

        <p className="d-flex flex-wrap mb-2">
          <strong>Email:</strong>

          <a href="src/components/Overview/Profile.jsx#">
            thomas@site.com
          </a>
        </p>

        <p className="d-flex flex-wrap mb-0">
          <strong>Phone:</strong>

          <a href="src/components/Overview/Profile.jsx#">
            (60) 12 345 6789
          </a>
        </p>
      </div>
    </div>
  )
}