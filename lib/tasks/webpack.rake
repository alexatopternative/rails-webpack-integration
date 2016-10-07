Rake::Task['assets:precompile'].enhance(['webpack:precompile'])

namespace :webpack do
  desc 'Precompile Webpack assets'
  task :precompile do
    system 'npm', 'run-script', 'build'
  end
end
