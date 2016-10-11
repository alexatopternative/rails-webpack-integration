class PagesController < ApplicationController
  include ApplicationHelper

  def index
    @pages = (1...25).to_a
    @i18n = i18n_builder(:hello, :bye)
    gon.jbuilder
  end
end
