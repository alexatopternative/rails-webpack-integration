module ApplicationHelper
  def utc_offset_min
    Time.zone.utc_offset
  end

  def i18n_json_builder(*locale_keys)
    keys = locale_keys.each
    i18n = Hash.new.tap do |dict|
      keys.each do |key|
        dict[key] = t(key)
      end
    end

    i18n.to_json
  end
end
