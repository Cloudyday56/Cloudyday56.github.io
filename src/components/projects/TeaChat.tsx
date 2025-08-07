const TeaChat = () => {
  return (
    <div className="bg-base-200 rounded-lg p-5 flex flex-col md:flex-row justify-between min-h-[160px]">
      <div className="flex-1 flex flex-col justify-between">
        <span className="text-2xl font-semibold text-secondary mb-2">
          TeaChat - Chatting Web App
        </span>
        <div className="text-gray-300 mb-4">
          <p className="max-w-[70%]">
            TeaChat is a real-time chat web application built with the MERN
            stack. Users can sign in, chat privately with other users, and enjoy
            instant message updates powered by socket.io.
          </p>
          <ul className="list-disc list-outside space-y-1 mt-2 pl-4 text-sm text-gray-400">
            <li>User authentication and secure sign-in</li>
            <li>Private one-on-one chat between users</li>
            <li>Real-time messaging and updates using socket.io</li>
            <li>Simple, responsive UI for seamless chatting</li>
          </ul>
        </div>
        <div className="flex gap-3 mt-auto">
          <a
            href="https://teachat.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-primary font-semibold"
          >
            Website
          </a>
          <a
            href="https://github.com/Cloudyday56/TeaChat"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline font-semibold"
          >
            Repo
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center md:ml-8 mt-4 md:mt-0 w-full md:w-40">
        <img
          src="/Teachat1.png"
          alt="TeaChat preview"
          className="w-full md:w-40 h-24 object-cover rounded-lg shadow"
        />
      </div>
    </div>
  );
};

export default TeaChat;
