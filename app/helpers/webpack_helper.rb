module WebpackHelper
  def webpack_include_tag(asset, options = {})
    options = options.reverse_merge(
      'src': webpack_asset_path(asset, 'js'),
      'type': 'text/javascript'
    )
    content_tag(:script, nil, options)
  end

  def webpack_asset_path(path, ext)
    path, ext = Regexp.escape(path), Regexp.escape(ext)
    hashed_asset = webpack_asset(/\A#{path}-\w+\.#{ext}\z/)
    unhashed_asset = webpack_asset(/\A#{path}\.#{ext}\z/)
    asset = hashed_asset || unhashed_asset
    File.join('/', webpack_path, asset).to_s
  end

  def webpack_asset(pattern)
    webpack_assets.find { |f| f.to_path =~ pattern }
  end

  def webpack_assets
    Dir[File.join(webpack_directory, '**/*')]
      .sort_by { |f| File.mtime(f) }.reverse
      .map { |f| Pathname.new(f).relative_path_from(webpack_directory) }
  end

  def webpack_path
    webpack_directory.relative_path_from(Rails.root.join('public'))
  end

  def webpack_directory
    Rails.application.config.x.webpack.path
  end
end
