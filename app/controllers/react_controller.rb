class ReactController < ApplicationController
    def show
        render file: Rails.root.join("public", "react-router", "react-router-index.html")
        #railsのコントローラを経由してreactをマウントするための静的なHTMLを返却する
    end
end
