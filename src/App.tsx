import ProfileCard from './components/ProfileCard';

function App() {
  return (
    /* CSS for manage profile*/
    <div className="flex items-center justify-center gap-8 bg-gray-100">

      {/* First Profile */}
      <ProfileCard
        name="Surakshya Khatri"
        role="Frontend Web Developer"
        image="/my-photo.jpg"
      />

      {/* Second Profile */}
      <ProfileCard
        name="Kranti Pariyar"
        role="UI/UX Designer"
        image="friend1.jpg"
      />

      {/* Third Profile */}
      <ProfileCard
        name="Prabin Basnet"
        role="Backend Developer"
        image="friend2.jpg"
      />

    </div>
  );
}

export default App;