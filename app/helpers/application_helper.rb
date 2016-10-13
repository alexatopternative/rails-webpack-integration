module ApplicationHelper
  def utc_offset_min
    Time.zone.utc_offset
  end

  def i18n_builder(*locale_keys)
    keys = locale_keys.each
    i18n = Hash.new.tap do |dict|
      keys.each do |key|
        dict["i18n-#{key}"] = t(key)
      end
    end
  end
end
