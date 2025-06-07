namespace :react_router do
  # For convenience, npm packages do not have to be explicitly installed.
  # Installed will be automatically initiated by other tasks.
  desc "React Router appのためにreact-routerディレクトリにnpmパッケージをインストール"
  task :npm_install do
    Dir.chdir("#{Dir.pwd}/react-router") do
      puts "Install npm packages ..."
      system("npm", "install")
    end
  end

  # Run bin/rails react_router:dev to start the dev server.
  #
  # If you are using the Foreman gem, you might want to put
  # this task into the Procfile.
  #
  # bin/rails react_router:dev
  desc "開発用にReact Routerサーバを起動"
  task dev: [ :npm_install ] do #dev実行前にnpm installの完了を条件とする
    Dir.chdir("#{Dir.pwd}/react-router") do
      system("npm", "run", "dev")
    end
  end

  # bin/rails react_router:typecheck
  desc "Check Typescript for the React Router App"
  task typecheck: [ :npm_install ] do
    Dir.chdir("#{Dir.pwd}/react-router") do
      system("npm", "run", "typecheck")
    end
  end

  # Run bin/rails react_router:build to build the production app.
  # The location of the build is defined in the
  # react-router/react-router.config.ts file, and should
  # point to a location within the public folder.
  # Running bin/rails assets:precompile will also run this task.
  #
  # bin/rails react_router:build
  desc "React Router Appを本番環境用の静的HTMLへビルド"
  task build: [ :npm_install ] do
    Dir.chdir("#{Dir.pwd}/react-router") do
      system("npm", "run", "build")
    end
  end

  # Run bin/rails react_router:clobber to remove the build files.
  # Running bin/rails assets:clobber will also run this task.
  desc "ビルドされたpublic/reactディレクトリを削除しクリーンにする"
  task :clobber do
    FileUtils.rm_rf("#{Dir.pwd}/public/react")
  end
end

# The following adds the above tasks to the regular
# assets:precompile and assets:clobber tasks.
#
# This means that any normal Rails deployment script which
# contains rake assets:precompile will also build the
# React Router app automatically.
Rake::Task["assets:precompile"].enhance([ "react_router:build" ]) #デプロイスクリプトに一貫して"react_router:build"の自動実行するよう設定
Rake::Task["assets:clobber"].enhance([ "react_router:clobber" ]) #railsアセット清掃時にreactのビルドファイルの清掃も設定